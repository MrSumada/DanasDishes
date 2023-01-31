const { AuthenticationError } = require('apollo-server-express')
const { User, Recipe } = require('../models')
const { signToken } = require('../utils/auth')


const { AuthenticationError } = require('apollo-server-express')
const { User, Recipe } = require('../models')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
        if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('recipes')
            .populate('following')

            return userData
        }

        throw new AuthenticationError('Not logged in')
        },
        users: async () => {
        return User.find()
            .select('-__v -password')
            .populate('recipes')
            .populate('following')
        },
        user: async (parent, { email }) => {
        return User.findOne({ email })
            .select('-__v -password')
            .populate('following')
            .populate('followers')
            .populate('recipes')
            .populate('favoriteRecipes')
        },
        recipes: async (parent, { email }) => {
        const params = email ? { email } : {}
        return Recipe.find(params).sort({ createdAt: -1 })
        },
        recipe: async (parent, { _id }, context) => {
        if (context.user) {
            return Recipe.findOne({ _id })
            .populate('steps')
        }
        throw new AuthenticationError('Not logged in')
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
        const user = await User.create(args)
        const token = signToken(user)

        return { token, user }
        },
        login: async (parent, { email, password }) => {
        const user = await User.findOne({ email })

        if (!user) {
            throw new AuthenticationError('Incorrect credentials')
        }

        const correctPw = await user.isCorrectPassword(password)

        if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials')
        }

        const token = signToken(user)
        return { token, user }
        },
        addRecipe: async (parent, args, context) => {
        if (context.user) {
            const recipe = await Recipe.create({
            ...args,
            username: context.user.username,
            })

            await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { recipes: Recipe._id } },
            { new: true },
            )

            return recipe
        }

        throw new AuthenticationError('You need to be logged in!')
        },
        completeStep: async (parent, { recipeId, ingredientId }, context) => {
            if (context.user) {
                const updatedRecipe = await Recipe.findOneAndUpdate(
                { _id: recipeId, 'steps._id': stepId },
                { 'steps.$.completed': true },
                { new: true, runValidators: true },
                )
                .populate('steps')
    
                return updatedRecipe
            }
            throw new AuthenticationError('You need to be logged in!')
            },
        
        completeStep: async (parent, { recipeId, stepId }, context) => {
        if (context.user) {
            const updatedRecipe = await Recipe.findOneAndUpdate(
            { _id: recipeId, 'steps._id': stepId },
            { 'steps.$.completed': true },
            { new: true, runValidators: true },
            )
            .populate('steps')

            return updatedRecipe
        }
        throw new AuthenticationError('You need to be logged in!')
        },
        deleteRecipe: async (parent, { recipeId }, context) => {
        if (context.user) {
            const deletedRecipe = await Recipe.findOneAndDelete({ _id: recipeId })
            return deletedRecipe
        }
        throw new AuthenticationError('You need to be logged in!')
        },
        deleteStep: async (parent, { recipeId, stepId }, context) => {
        if (context.user) {
            const updatedRecipe = await Recipe.findOneAndUpdate(
            { _id: recipeId },
            { $pull: { steps: { _id: stepId } } },
            { new: true },
            )
            .populate('steps')
            return updatedRecipe
        }
        }
    }
}

module.exports = resolvers

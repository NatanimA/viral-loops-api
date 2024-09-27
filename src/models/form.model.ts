
// Import necessary modules
import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for the "form" model
interface IForm extends Document {
    title: string;
    subtitle: string;
    buttonText: string;
    isFirstNameRequired: boolean;
    isLastNameRequired: boolean;
}

// Define the Mongoose schema for the "form" model
const FormSchema: Schema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    buttonText: { type: String, required: true },
    isFirstNameRequired: { type: Boolean, required: true },
    isLastNameRequired: { type: Boolean, required: true }
}, { timestamps: true });

// Create and export the Mongoose model for the "form" model
const FormModel = mongoose.model<IForm>('Form', FormSchema);


export { FormModel, IForm };
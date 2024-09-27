 // formHelpers.ts

import { FormModel, IForm } from '../models/form.model'; // Update the import path as needed

export const FormHelpers = {
  // Create a new form
  createForm: async (formData: Partial<IForm>): Promise<IForm> => {
    try {
      const newForm = new FormModel(formData);
      return await newForm.save();
    } catch (error: Error | any)  {
      throw new Error(`Error creating form: ${error.message}`);
    }
  },

  // Get all forms
  getAllForms: async (): Promise<IForm[]> => {
    try {
      return await FormModel.find().sort({ createdAt: -1 });
    } catch (error:Error | any) {
      throw new Error(`Error fetching forms: ${error.message}`);
    }
  },

  // Get a form by ID
  getFormById: async (id: string): Promise<IForm | null> => {
    try {
      return await FormModel.findById(id);
    } catch (error:Error | any) {
      throw new Error(`Error fetching form: ${error.message}`);
    }
  },

  // Update a form
  updateForm: async (id: string, updateData: Partial<IForm>): Promise<IForm | null> => {
    try {
      return await FormModel.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error:Error | any) {
      throw new Error(`Error updating form: ${error.message}`);
    }
  },

  // Delete a form
  deleteForm: async (id: string): Promise<IForm | null> => {
    try {
      return await FormModel.findByIdAndDelete(id);
    } catch (error:Error | any) {
      throw new Error(`Error deleting form: ${error.message}`);
    }
  },

  // Count all forms
  countForms: async (): Promise<number> => {
    try {
      return await FormModel.countDocuments();
    } catch (error:Error | any) {
      throw new Error(`Error counting forms: ${error.message}`);
    }
  },

  // Search forms by title (case-insensitive)
  searchFormsByTitle: async (searchTerm: string): Promise<IForm[]> => {
    try {
      return await FormModel.find({ title: { $regex: searchTerm, $options: 'i' } });
    } catch (error:Error | any) {
      throw new Error(`Error searching forms: ${error.message}`);
    }
  },

  // Get forms with specific requirements
  getFormsWithRequirements: async (isFirstNameRequired: boolean, isLastNameRequired: boolean): Promise<IForm[]> => {
    try {
      return await FormModel.find({ isFirstNameRequired, isLastNameRequired });
    } catch (error:Error | any) {
      throw new Error(`Error fetching forms with requirements: ${error.message}`);
    }
  },

  // Update button text for all forms
  updateAllButtonTexts: async (newButtonText: string): Promise<number> => {
    try {
      const result = await FormModel.updateMany({}, { buttonText: newButtonText });
      return result.modifiedCount;
    } catch (error:Error | any) {
      throw new Error(`Error updating button texts: ${error.message}`);
    }
  },
};
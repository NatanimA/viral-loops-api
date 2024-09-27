// layoutSettingHelpers.ts

import { LayoutSettingModel, ILayoutSetting } from '../models/layout.model'; // Update the import path as needed
import { Types } from 'mongoose';

export const LayoutSettingHelpers = {
  // Create a new layout setting
  createLayoutSetting: async (layoutSettingData: Partial<ILayoutSetting>): Promise<ILayoutSetting> => {
    try {
      const newLayoutSetting = new LayoutSettingModel(layoutSettingData);
      return await newLayoutSetting.save();
    } catch (error: Error | any) {
      throw new Error(`Error creating layout setting: ${error.message}`);
    }
  },

  // Get all layout settings
  getAllLayoutSettings: async (): Promise<ILayoutSetting[]> => {
    try {
      return await LayoutSettingModel.find().sort({ createdAt: -1 }).populate('form');
    } catch (error:Error | any) {
      throw new Error(`Error fetching layout settings: ${error.message}`);
    }
  },

  // Get a layout setting by ID
  getLayoutSettingById: async (id: string): Promise<ILayoutSetting | null> => {
    try {
      return await LayoutSettingModel.findById(id).populate('form');
    } catch (error:Error | any) {
      throw new Error(`Error fetching layout setting: ${error.message}`);
    }
  },

  // Get layout setting by form ID
  getLayoutSettingByFormId: async (formId: string): Promise<ILayoutSetting | null> => {
    try {
      return await LayoutSettingModel.findOne({ form: formId }).populate('form');
    } catch (error:Error | any) {
      throw new Error(`Error fetching layout setting by form ID: ${error.message}`);
    }
  },

  // Update a layout setting
  updateLayoutSetting: async (id: string, updateData: Partial<ILayoutSetting>): Promise<ILayoutSetting | null> => {
    try {
      return await LayoutSettingModel.findByIdAndUpdate(id, updateData, { new: true }).populate('form');
    } catch (error:Error | any) {
      throw new Error(`Error updating layout setting: ${error.message}`);
    }
  },

  // Delete a layout setting
  deleteLayoutSetting: async (id: string): Promise<ILayoutSetting | null> => {
    try {
      return await LayoutSettingModel.findByIdAndDelete(id);
    } catch (error:Error | any) {
      throw new Error(`Error deleting layout setting: ${error.message}`);
    }
  },

  // Count all layout settings
  countLayoutSettings: async (): Promise<number> => {
    try {
      return await LayoutSettingModel.countDocuments();
    } catch (error:Error | any) {
      throw new Error(`Error counting layout settings: ${error.message}`);
    }
  },

  // Get layout settings by background color
  getLayoutSettingsByBackground: async (backgroundColor: string): Promise<ILayoutSetting[]> => {
    try {
      return await LayoutSettingModel.find({ formBackground: backgroundColor }).populate('form');
    } catch (error:Error | any) {
      throw new Error(`Error fetching layout settings by background color: ${error.message}`);
    }
  },

  // Update button properties for all layout settings
  updateAllButtonProperties: async (buttonProps: Partial<ILayoutSetting>): Promise<number> => {
    try {
      const result = await LayoutSettingModel.updateMany({}, {
        $set: {
          buttonColor: buttonProps.buttonColor,
          buttonFontSize: buttonProps.buttonFontSize,
          buttonFontStyle: buttonProps.buttonFontStyle,
          isButtonBold: buttonProps.isButtonBold,
          isButtonItalic: buttonProps.isButtonItalic,
          isButtonUnderlined: buttonProps.isButtonUnderlined,
          buttonRadius: buttonProps.buttonRadius
        }
      });
      return result.modifiedCount;
    } catch (error:Error | any) {
      throw new Error(`Error updating button properties: ${error.message}`);
    }
  },

  // Get layout settings with centered headings and subtitles
  getCenteredLayoutSettings: async (): Promise<ILayoutSetting[]> => {
    try {
      return await LayoutSettingModel.find({
        isHeadingCenter: true,
        isSubtitleCenter: true
      }).populate('form');
    } catch (error:Error | any) {
      throw new Error(`Error fetching centered layout settings: ${error.message}`);
    }
  },

  // Get layout settings by font style
  getLayoutSettingsByFontStyle: async (fontStyle: string): Promise<ILayoutSetting[]> => {
    try {
      return await LayoutSettingModel.find({
        $or: [
          { headingFontStyle: fontStyle },
          { subtitleFontStyle: fontStyle },
          { buttonFontStyle: fontStyle }
        ]
      }).populate('form');
    } catch (error:Error | any) {
      throw new Error(`Error fetching layout settings by font style: ${error.message}`);
    }
  },
};
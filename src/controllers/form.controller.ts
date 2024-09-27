// form.controller.ts

import { Request, Response } from 'express';
import { FormModel, IForm } from '../models/form.model';
import { LayoutSettingModel, ILayoutSetting } from '../models/layout.model';
import { LayoutSettingHelpers } from '../helpers/layout.model.helper';

export const FormController = {
  // Function to save Form and LayoutSetting data
  saveFormWithLayout: async (req: Request, res: Response) => {
    try {
      const {
        // Form fields
        title,
        subtitle,
        buttonText,
        isFirstNameRequired,
        isLastNameRequired,

        // LayoutSetting fields
        formBackground,
        borderRadius,
        headingFontStyle,
        headingFontSize,
        headingColor,
        isHeadingBold,
        isHeadingItalic,
        isHeadingUnderlined,
        isHeadingCenter,
        subtitleFontSize,
        subtitleFontStyle,
        subtitleColor,
        isSubtitleBold,
        isSubtitleItalic,
        isSubtitleUnderlined,
        isSubtitleCenter,
        buttonColor,
        buttonBackground,
        buttonFontSize,
        buttonFontStyle,
        isButtonBold,
        isButtonItalic,
        isButtonUnderlined,
        buttonRadius
      } = req.body;

      // Create and save the Form
      const newForm = new FormModel({
        title,
        subtitle,
        buttonText,
        isFirstNameRequired,
        isLastNameRequired
      });

      const savedForm = await newForm.save();

      // Create and save the LayoutSetting, using the Form's ID
      const newLayoutSetting = new LayoutSettingModel({
        form: savedForm._id,
        formBackground,
        borderRadius,
        headingFontStyle,
        headingFontSize,
        headingColor,
        isHeadingBold,
        isHeadingItalic,
        isHeadingUnderlined,
        isHeadingCenter,
        subtitleFontSize,
        subtitleFontStyle,
        subtitleColor,
        isSubtitleBold,
        isSubtitleItalic,
        isSubtitleUnderlined,
        isSubtitleCenter,
        buttonColor,
        buttonFontSize,
        buttonFontStyle,
        isButtonBold,
        isButtonItalic,
        isButtonUnderlined,
        buttonRadius,
        buttonBackground

      });

      const savedLayoutSetting = await newLayoutSetting.save();

      // Respond with the saved data
      res.status(201).json({
        message: 'Form and Layout Settings saved successfully',
        form: savedForm,
        layoutSetting: savedLayoutSetting
      });

    } catch (error: Error | any) {
      console.error('Error saving form and layout settings:', error);
      res.status(500).json({ message: 'Error saving form and layout settings', error: error.message });
    }
  },
  getLayout: async (req: Request, res: Response) => {
    try {
      const { formId } = req.params;
      const layout = await LayoutSettingHelpers.getLayoutSettingByFormId(formId);
      res.status(200).json(layout);
    } catch (error: Error | any) {
      console.error('Error getting layout:', error);
      res.status(500).json({ message: 'Error getting layout', error: error.message });
    }
  }

};
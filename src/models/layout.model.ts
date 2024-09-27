// Import necessary modules
import mongoose, { Schema, Document } from 'mongoose';
import { IForm } from './form.model';

// Define the interface for the "layoutSetting" model
interface ILayoutSetting extends Document {
    form: IForm['_id'];
    formBackground: string;
    borderRadius: string;
    headingFontStyle: string;
    headingFontSize: string;
    headingColor: string;
    isHeadingBold: boolean;
    isHeadingItalic: boolean;
    isHeadingUnderlined: boolean;
    isHeadingCenter: boolean;
    subtitleFontSize: string;
    subtitleFontStyle: string;
    subtitleColor: string;
    isSubtitleBold: boolean;
    isSubtitleItalic: boolean;
    isSubtitleUnderlined: boolean;
    isSubtitleCenter: boolean;
    buttonColor: string;
    buttonBackground: string;
    buttonFontSize: string;
    buttonFontStyle: string;
    isButtonBold: boolean;
    isButtonItalic: boolean;
    isButtonUnderlined: boolean;
    buttonRadius: string;
}

// Define the Mongoose schema for the "layoutSetting" model
const LayoutSettingSchema: Schema = new Schema({
    form: { type: Schema.Types.ObjectId, ref: 'Form', required: true },
    formBackground: { type: String, required: true },
    borderRadius: { type: String, required: true },
    headingFontStyle: { type: String, required: true },
    headingFontSize: { type: String, required: true },
    headingColor: { type: String, required: true },
    isHeadingBold: { type: Boolean, required: true },
    isHeadingItalic: { type: Boolean, required: true },
    isHeadingUnderlined: { type: Boolean, required: true },
    isHeadingCenter: { type: Boolean, required: true },
    subtitleFontSize: { type: String, required: true },
    subtitleFontStyle: { type: String, required: true },
    subtitleColor: { type: String, required: true },
    isSubtitleBold: { type: Boolean, required: true },
    isSubtitleItalic: { type: Boolean, required: true },
    isSubtitleUnderlined: { type: Boolean, required: true },
    isSubtitleCenter: { type: Boolean, required: true },
    buttonColor: { type: String, required: true },
    buttonBackground: { type: String, required: true },
    buttonFontSize: { type: String, required: true },
    buttonFontStyle: { type: String, required: true },
    isButtonBold: { type: Boolean, required: true },
    isButtonItalic: { type: Boolean, required: true },
    isButtonUnderlined: { type: Boolean, required: true },
    buttonRadius: { type: String, required: true }
},{
    timestamps:true
});

// Create and export the Mongoose model for the "layoutSetting" model
const LayoutSettingModel = mongoose.model<ILayoutSetting>('LayoutSetting', LayoutSettingSchema);

export { LayoutSettingModel, ILayoutSetting };
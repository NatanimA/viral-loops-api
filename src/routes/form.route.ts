import { Router } from 'express';
import * as controller from '../controllers/form.controller';

export const form = Router();

form.get('/:formId', controller.FormController.getLayout);
form.post('/', controller.FormController.saveFormWithLayout);

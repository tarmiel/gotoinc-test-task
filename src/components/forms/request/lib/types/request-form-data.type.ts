import { z } from 'zod';
import { requestFormSchema } from '../schemas';

export type RequestFormData = z.infer<typeof requestFormSchema>;

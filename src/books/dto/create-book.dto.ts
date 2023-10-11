import { z as zod } from 'zod';

export const createBookSchema = zod.object({
  title: zod.string(),
  author: zod.string().nullish(),
  year: zod.number().nullish(),
});

export type CreateBookDto = zod.infer<typeof createBookSchema>;

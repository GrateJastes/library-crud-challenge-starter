import { z as zod } from 'zod';

export const updateBookSchema = zod.object({
  title: zod.string().nullish(),
  author: zod.string().nullish(),
  year: zod.number().nullish(),
});

export type UpdateBookDto = zod.infer<typeof updateBookSchema>;

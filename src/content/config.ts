import { glob } from "astro/loaders";
import { defineCollection , z } from "astro:content"

export const Collections = {
    blog:defineCollection({
        loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
        schema:z.object({
            draft:z.boolean().default(false),
            date:z.coerce.date(),
            title:z.string(),
            slug:z.string().optional(),
            category:z.enum(['food', 'wisdom','programming language','politics']),
            tags:z.array(z.string().optional()),
            share:z.object({
                image:z.string().optional(),
                title:z.string(),
                description:z.string()
            })
        }).strict()
})};    
import { Request, Response } from "express";
import knex from '../database/connection';           

export default class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*')

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,
                image_url_mobile: `http://192.168.0.87:3333/uploads/${item.image}`
            };
        });
    
        return response.json(serializedItems);
    };
};
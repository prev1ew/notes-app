import { v4 as uuid } from 'uuid';
import { getDatesFromString } from '../db/helpers/dbHelper.js';

class Note {
    id;
    title;
    description;
    createdAt;
    category;
    isArchived;
    mentionDates;
    constructor(title, description, category, mentionDates = "", isArchived = false,) {
        return {
            id: uuid(),
            title,
            description,
            createdAt: new Date(),
            category,
            isArchived,
            mentionDates: (mentionDates === "" ? getDatesFromString(description) : mentionDates)
        }
    }
}

export default Note;
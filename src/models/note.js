import { v4 as uuid } from 'uuid';
import { getDatesFromString } from '../db/helpers/dbHelper.js';

class Note {
    id;
    description;
    createdAt;
    category;
    isArchived;
    mentionDates;
    constructor(description, category, mentionDates = "", isArchived = false,) {
        return {
            id: uuid(),
            description,
            createdAt: new Date(),
            category,
            isArchived,
            mentionDates: (mentionDates === "" ? getDatesFromString(description) : mentionDates)
        }
    }
}

export default Note;
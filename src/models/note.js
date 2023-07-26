import { v4 as uuid } from 'uuid';

class Note {
    id;
    description;
    createdAt;
    category;
    isArchived;
    constructor(description, category, isArchived = false) {
        return {
            id: uuid(),
            description,
            createdAt: new Date(),
            category,
            isArchived,
            // setNewId: function (id) {
            //     this.id = id
            //     return this
            // }
        }
    }
}

export default Note;
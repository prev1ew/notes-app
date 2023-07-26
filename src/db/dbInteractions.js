import db from "./db.js";
import { fillMentionDatesFromDescription as fillDates } from "./helpers/dbHelper.js";


const getRecord = (recordId) => {
    return db.find((el) => el.id === recordId)
}

const addRecord = (newRecord) => {
    if (getRecord(newRecord.id)) {
        return false;
    }

    db.push(fillDates(newRecord))
    return newRecord;
}

const updateRecord = (dataToUpdate, recordId) => {
    const { description, category, isArchived } = dataToUpdate;
    const currentRecord = getRecord(recordId)
    if (!currentRecord) {
        return false;
    }

    if (description !== undefined) {
        currentRecord.description = description;
    }

    if (category !== undefined) {
        currentRecord.category = category;
    }

    if (isArchived !== undefined) {
        currentRecord.isArchived = isArchived;
    }

    return currentRecord;
}

const deleteRecord = (recordId) => {
    const objToDelete = getRecord(recordId)
    if (!objToDelete) {
        return false;
    }
    const index = db.indexOf(objToDelete);
    db.splice(index, 1);
    return objToDelete;
}

export default { addRecord, updateRecord, deleteRecord, getRecord };
export { addRecord, updateRecord, deleteRecord, getRecord }
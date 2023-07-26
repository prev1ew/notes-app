import db from "./db.js";


const getRecord = (recordId) => {
    return db.find((el) => el.id === recordId)
}

const addRecord = (newRecord) => {
    if (getRecord(newRecord.id)) {
        return false;
    }

    db.push(newRecord)
    return true;
}

const updateRecord = (updatedRecord) => {
    const { id, description, category, isArchived } = updatedRecord;
    const currentRecord = getRecord(id)
    if (!currentRecord) {
        return false;
    }

    currentRecord.description = description;
    currentRecord.category = category;
    currentRecord.isArchived = isArchived;

    return true;
}

const deleteRecord = (recordId) => {
    const objToDelete = db.find((el) => el.id === recordId)
    if (!objToDelete) {
        return false;
    }
    const index = db.indexOf(objToDelete);
    db.splice(index, 1);
    return objToDelete;
}

export default { addRecord, updateRecord, deleteRecord, getRecord };
export { addRecord, updateRecord, deleteRecord, getRecord }
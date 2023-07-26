// NOTE: regex below was testes with those formats only:
// dd-mm-yyyy
// d-m-yyyy
// d/m/yyyy
// dd/mm/yyyy
//... other cases WEREN'T tested

const datesRegex = /(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}/g

const getDatesFromString = (stringWithOrWithoutDates) => {
    const results = stringWithOrWithoutDates.match(datesRegex)
    if (results) {
        return results.join(", ")
    }
    return "";
}

const fillMentionDatesFromDescription = (noteObject) => {
    noteObject.mentionDates = getDatesFromString(noteObject.description)
    return noteObject;
}

export default fillMentionDatesFromDescription;
export { fillMentionDatesFromDescription, getDatesFromString }
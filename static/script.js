const createBlock = `<form id="form-data">
<div class="form-group">
  <label for="name">Name</label>
  <input type="text" class="form-control" id="name" placeholder="Name">
</div>

<div class="form-group">
  <label for="description">Description</label>
  <textarea class="form-control" id="description" rows="3" placeholder="Description"></textarea>
</div>

<div class="form-group">
  <label for="category">Category</label>
  <select class="form-control" id="category">
    <option>Task</option>
    <option>Random Thought</option>
    <option>Idea</option>
  </select>
</div>
</form>`

function refresh() {

}

function createNote() {
    const formData = {
        title: $("#name").val(),
        description: $("#description").val(),
        category: $("#category").val()
    }
    console.log(formData)
    fetch("/api/v1/notes/create", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then((response) => {
            if (response.res) {
                hideModal()
            } else {
                alert(response.error)
            }
        })
}

function deleteChildElements(id) {
    const myNode = document.getElementById(id);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
}

function hideModal() {
    $("#myModal").modal("hide");
}



$(document).ready(function () {
    $("#create-btn").click(function () {
        deleteChildElements("modal-body")
        $("#staticBackdropLabel").html("New Note");
        $("#modal-body").append(createBlock);
        $("#confirm-button").html("Create")
        $("#myModal").modal();
    });
});


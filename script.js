const getEmail = () => {
    const searchInput = document.getElementById('search-input');
    const search = searchInput.value;
    if (!search) {
        return;
    }
    displayEmail(search);
    searchInput.value = '';
}

const displayEmail = email => {
    const invalidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(invalidEmail)) {
        emailStatus(true);
    } else {
        emailStatus(false);
    }
}

const emailStatus = status => {
    const parentDiv = document.getElementById('parent-div');
    if (status) {
        parentDiv.innerHTML = `
        <h3 class="text-success">The email is correct</h3>
    `;
    } else {
        parentDiv.innerHTML = `
        <h3 class="text-danger">The email is not correct</h3>
    `;
    }
}


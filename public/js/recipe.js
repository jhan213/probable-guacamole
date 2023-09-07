// const upvoteButtonHandler = async (event) => {
//     console.log(0);
//     if (event.target.hasAttribute('data-id')) {
//         const id = event.target.getAttribute('data-id');

//         const response = await fetch(`/api/recipes/${id}`, {
//             method: 'PUT',
//             body: JSON.stringify({ name, description, ingredients, cost, instructions, image }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         console.log(response);
//         if (response.ok) {
//             document.location.replace(`/recipe/${id}`);
//         } else {
//             alert('Failed to update recipe');
//         }
//     }
// };

// document.querySelector("#upvote-btn")
//     .addEventListener('click', upvoteButtonHandler);

const upvoteButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/recipes/${id}`, {
            method: 'PUT',
        });

        if (response.ok) {
            document.location.replace(`/recipe/${id}`);
        } else {
            alert('Failed to update recipe');
        }
    }
};

document
    .querySelector('#upvote-btn')
    .addEventListener('click', upvoteButtonHandler);
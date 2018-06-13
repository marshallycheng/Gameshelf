export const fetchUser = id => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}`
    })
);

// probably dont need any of this
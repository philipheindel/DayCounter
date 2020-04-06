class Gripper {
    _(query) {
        let result = document.querySelectorAll(query);
        if (result.length == 1) {
            return result[0];
        }
        return result;
    };

    _(query, innerHTML) {
        let result = document.querySelectorAll(query);
        result.forEach(element => {
            element.innerHTML = innerHTML;
        });
    };
}

function _(query) {
    let result = document.querySelectorAll(query);
    if (result.length == 1) {
        result = result[0];
    }
    return result;
};

function _(query, innerHTML) {
    let result = document.querySelectorAll(query);
    result.forEach(element => {
        element.innerHTML = innerHTML;
    });
};

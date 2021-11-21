import {
    actions,
    roles
} from "./constants.js";

const mappings = new Map();

mappings.set(actions.MODIFY_STORY, [roles.ADMIN, roles.EDITOR]);
mappings.set(actions.VIEW_STORY, [roles.ADMIN, roles.EDITOR, roles.GUEST]);
mappings.set(actions.DELETE_STORY, [roles.ADMIN]);
mappings.set(actions.CREATE_STORY, [roles.ADMIN, roles.EDITOR]);

function hasPermission(role, action) {

    if (mappings.has(action)) {
        return mappings.get(action).includes(role);
    }

    return false;
}

export default hasPermission;
export {
    actions,
    roles
};
import format from "date-fns/format/index.js";

export const formatDateTime = (dateTime: string) => {
    return format(new Date(dateTime), "dd/MM/yyyy HH:mm");
};

export const formatDate = (dateTime: string) => {
    return format(new Date(dateTime), "dd/MM/yyyy");
};

import format from "date-fns/format";

export const formatDateTime = (dateTime: string) => {
    return format(new Date(dateTime), "dd/MM/yyyy HH:mm");
};

export const formatDate = (dateTime: string) => {
    return format(new Date(dateTime), "dd/MM/yyyy");
};

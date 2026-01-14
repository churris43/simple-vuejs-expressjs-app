import { format, parseISO } from "date-fns";

// Helper function to format dates
export const formatDate = (mysqlDatetime: string): string => {
  const isoDate = mysqlDatetime.replace(" ", "T");
  return format(parseISO(isoDate), "dd/MM/yyyy HH:mm a");
};

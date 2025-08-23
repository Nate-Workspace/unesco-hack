import { AlertTriangle, CheckCircle, Clock } from "lucide-react";

export const getStatusColor = (status: string) => {
  switch (status) {
    case "ready":
      return "bg-green-500";
    case "not-ready":
      return "bg-yellow-500";
    case "technical-issues":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "ready":
      return <CheckCircle className="h-4 w-4" />;
    case "not-ready":
      return <Clock className="h-4 w-4" />;
    case "technical-issues":
      return <AlertTriangle className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

import React from "react";

export interface UpdateComponentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export interface CourseActionElementProps
  extends React.HTMLAttributes<HTMLDivElement> {
  altAttr: string;
  iconRef: string;
  action: string;
}

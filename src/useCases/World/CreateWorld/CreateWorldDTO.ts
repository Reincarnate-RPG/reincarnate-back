export type CreateWorldDTO = {
  name: string;
  description?: string | null;
};

export type CreateWorldRequestDTO = {
  name: string;
  description?: string | null;
  userId: string;
  profileName: string;
  profileDescription: string;
};

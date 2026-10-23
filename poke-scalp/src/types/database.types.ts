export type Database = {
  public: {
    Tables: {
      serie: {
        Row: {
          id_serie: number;
          libelle: string;
        };
        Insert: {
          id_serie?: number; // généré par la base
          libelle: string;
        };
        Update: {
          id_serie?: number;
          libelle?: string;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};

type PublicTables = Database["public"]["Tables"];
// T = nom de la table dans la base de données publique (au lieu de : ["public"]["Tables"]["serie"])
export type Tables<T extends keyof PublicTables> = PublicTables[T]["Row"];
export type TablesInsert<T extends keyof PublicTables> = PublicTables[T]["Insert"];
export type TablesUpdate<T extends keyof PublicTables> = PublicTables[T]["Update"];
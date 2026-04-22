"use client";

import { createContext, useContext, useState } from "react";
import LeadModal from "./LeadModal";

type LeadContextType = {
  openLead: () => void;
  closeLead: () => void;
};

const LeadContext = createContext<LeadContextType>({
  openLead: () => {},
  closeLead: () => {},
});

export function useLeadModal() {
  return useContext(LeadContext);
}

export default function LeadProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openLead = () => setOpen(true);
  const closeLead = () => setOpen(false);

  return (
    <LeadContext.Provider value={{ openLead, closeLead }}>
      {children}
      {open && <LeadModal closeModal={closeLead} />}
    </LeadContext.Provider>
  );
}
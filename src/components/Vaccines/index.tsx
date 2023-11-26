import Box from "@mui/material/Box";
import { VaccineCard } from "./VaccineCard";
import { Vaccine, VaccineStatus } from "@/types/vaccines";

export const Vaccines: React.FC<{
  vaccines: Vaccine[];
  variant: VaccineStatus;
}> = ({ vaccines, variant }) => {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      {vaccines.map((vaccine) => (
        <VaccineCard
          key={vaccine.id}
          id={vaccine.id}
          popularName={vaccine?.popularName}
          dose={vaccine.dose}
          description={vaccine.description}
          manufacturer={vaccine?.manufacturer}
          vaccinationDate={vaccine.vaccinationDate}
          variant={variant}
        />
      ))}
    </Box>
  );
};

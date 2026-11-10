import { useRouter } from "expo-router";
import { throttle } from "lodash";
import { createContext, useState } from "react";
import AddressContext, {
  DefaultAddressContext,
} from "../interfaces/AddressContext";
import Location from "../interfaces/Location";

type ContextChildrenProps = {
  children: React.ReactNode;
};

export const GlobalAddressContext = createContext<AddressContext>(
  DefaultAddressContext
);

export const AddressContextProvider = ({ children }: ContextChildrenProps) => {
  const router = useRouter();
  const [address, setAddress] = useState<string>(
    "Rua Americo Brasiliense, Sao Paulo"
  );
  const [selectedLocation, setSelectedLocation] = useState<Location>();
  
  // 🛡️ FORCE INITIALIZATION TO AN EMPTY ARRAY []
  const [locations, setLocations] = useState<Location[]>([]);

  // 📝 MOCK DATA ARRAY
  const mockLocations: Location[] = [
    {
      id: "mock-1",
      name: "Rua Americo Brasiliense, Sao Paulo",
    } as any, 
  ];

  // 1. Fixed Autocomplete
  const fetchLocations = throttle(async (searchAddress) => {
    try {
      // Ensure we always provide an array to FlatList
      if (searchAddress && searchAddress.trim().length > 0) {
        setLocations(mockLocations);
      } else {
        setLocations([]); // 🛡️ Keep it an empty array, never clear to undefined
      }
    } catch (error) {
      console.log(error);
    }
  }, 33);

  // 2. Fixed Location Selection
  const fetchSelectedLocation = async (selectedAddress: string) => {
    try {
      // Pass the singular mock item object
      setSelectedLocation(mockLocations[0]);
    } catch (error) {
      console.log(error);
    } finally {
      router.replace({
        pathname: "/product",
      });
    }
  };

  return (
    <GlobalAddressContext.Provider
      value={{
        selectedLocation,
        address,
        locations, // This is now guaranteed to be an array
        setSelectedLocation,
        setLocations,
        setAddress,
        fetchSelectedLocation,
        fetchLocations,
      }}
    >
      {children}
    </GlobalAddressContext.Provider>
  );
};

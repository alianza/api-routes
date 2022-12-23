import dbConnect from "../lib/dbConnect";
import findAndSerializeDoc from "../lib/util";
import Pet from "../models/Pet";
import { Model } from "mongoose";
import PetCard from "../components/cards/pet/petCard";

export async function getServerSideProps() {
  await dbConnect();

  const pets = await findAndSerializeDoc(Pet, Model.find, {});

  return { props: { pets } };
}

const Index = ({ pets }) => {
  return (
    <div className="flex flex-col items-center gap-16">
      <h1 className="-mb-12 text-4xl">Pet List</h1>
      <div id="pets" className="flex flex-wrap gap-2">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} mode="view" />
        ))}
      </div>
    </div>
  );
};

export default Index;

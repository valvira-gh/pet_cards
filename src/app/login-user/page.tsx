import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LogCard = () => {
  return (
    <Card className="m-4">
      <CardHeader>
        <CardTitle>Kirjaudu sisään</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Input placeholder="Käyttäjätunnus" />
        <Input placeholder="Salasana" />
      </CardContent>
      <CardFooter>
        <Button>Kirjaudu</Button>
      </CardFooter>
    </Card>
  );
};

const LogPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <LogCard />
    </div>
  );
};

export default LogPage;

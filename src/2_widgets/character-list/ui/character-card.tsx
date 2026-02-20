import type { ICharacter } from "@entities/character/model/types";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@shared/ui/shadcn/card";
import { Badge } from "@shared/ui/shadcn/badge";

interface ICharacterCardProps {
    character: ICharacter;
}

export const CharacterCard = ({ character }: ICharacterCardProps) => {
    return (
        <>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow py-0">
                <div className="relative  w-full overflow-hidden">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <CardHeader>
                    <CardTitle className="text-xl">{character.name}</CardTitle>
                    <CardDescription>
                        <div className="flex items-center gap-2">
                            <div
                                className={`
				w-2 h-2 rounded-full
				${
                    character.status === "Alive"
                        ? "bg-green-500"
                        : character.status === "Dead"
                          ? "bg-red-500"
                          : "bg-gray-500"
                }
			  `}
                            />
                            <span>
                                {character.status === "Alive"
                                    ? "Жив"
                                    : character.status === "Dead"
                                      ? "Мёртв"
                                      : "Неизвестно"}
                            </span>
                        </div>
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-2 pb-5">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Вид:</span>
                        <span className="font-medium">{character.species}</span>
                    </div>

                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Пол:</span>
                        <span className="font-medium">
                            {character.gender === "Female"
                                ? "Женский"
                                : character.gender === "Male"
                                  ? "Мужской"
                                  : character.gender === "unknown"
                                    ? "Бесполый"
                                    : "Неизвестно"}
                        </span>
                    </div>

                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Локация:</span>
                        <span
                            className="font-medium truncate max-w-[150px]"
                            title={character.location.name}
                        >
                            {character.location.name}
                        </span>
                    </div>
                </CardContent>

                {character.type && (
                    <CardFooter className="pb-5">
                        <Badge variant="secondary" className="text-xs">
                            {character.type}
                        </Badge>
                    </CardFooter>
                )}
            </Card>
        </>
    );
};

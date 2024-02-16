import {Button} from "@/components/ui/button";
import {PlusIcon} from "lucide-react";
import {FC} from "react";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
    return (
        <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
            <div className="">
                <div className="">Company</div>
                <div className="font-semibold">Twitter</div>
            </div>
            <div className="">
                <Button className="rounded-none py-3 px-6">
                    <PlusIcon className="mr-2 w-4 h-4"/>
                    Post a Job
                </Button>
            </div>
        </div>
    );
};

export default Header;

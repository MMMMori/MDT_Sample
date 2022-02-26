type MenuBarBtmProps = {
    User: {
        id: string;
        name: string;
    }
}

export const MenuBarBtm = (props: MenuBarBtmProps) => {
    return (
        <div className="text-center bg-white">
            { props.User.id === "" ? 
                (<button className="bg-gray-400 text-gray-50 rounded-lg font-bold w-40"> Login </button>):
                (<button className="bg-gray-400 text-gray-50 rounded-lg font-bold w-40"> Logout </button>)
            }
        </div>
    );
};
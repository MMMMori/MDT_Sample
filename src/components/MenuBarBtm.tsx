type MenuBarBtmProps = {
    User: {
        id: string;
        name: string;
    }
}
export const MenuBarBtm = (props: MenuBarBtmProps) => {
    return (
        <div className="text-center">
            { props.User.id === "" ?
                (<button className="bg-rose-500 text-red-50 rounded-lg font-bold w-40"> Login </button>):
                (<button className="bg-rose-500 text-red-50 rounded-lg font-bold w-40"> Logout </button>)
            }
        </div>
    );
};
const UserSidebarList = () => {
    return (
        <div className="SidebarList row">
            <div className="col-12 border">
            {[...Array(10)].map((x, i) =>
                <div className="row my-1">
                    <div className="col-9 my-auto name border">
                        <span className="d-block">Luis</span>
                        <span className="d-block">10 Puntos</span>
                    </div>
                    <div className="col-3 my-auto p-0 text-center actions border">
                        <button type="button" class="btn btn-outline-dark">
                            <span className="fas fa-trash"></span>
                        </button>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

export default UserSidebarList;
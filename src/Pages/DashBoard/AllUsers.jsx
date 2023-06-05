import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleDelete = user =>{
    console.log(user)
  }
  const handleMakeAdmin = user =>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method: 'PATCH'
    }).then(res => res.json()).then(data =>{
        console.log(data);
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is admin now`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold uppercase">
        all users: {users.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index) =><tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user?.email}</td>
                    <td>
                        { user.role === 'admin' ? "admin" : <button onClick={()=>handleMakeAdmin(user)} className="btn bg-slate-300 btn-md"><FaUserShield></FaUserShield> </button>}
                    </td>
                    <td><button onClick={()=>handleDelete(user)} className="btn bg-red-500 btn-md"><FaTrashAlt></FaTrashAlt> </button></td>
                  </tr> )
            }
            
            {/* row 2 */}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

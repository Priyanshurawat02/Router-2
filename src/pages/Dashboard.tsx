// ✅ pages/Dashboard.tsx
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
    const { user, logout } = useAuth();
    return (
        <div>
            <p>Welcome, {user}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
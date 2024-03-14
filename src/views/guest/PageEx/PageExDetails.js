import { useNavigate, useParams } from "react-router-dom";

export default function PageExDetails() {
  const { id } = useParams();
  console.log("🚀 ~ PageExDetails ~ params:", id)
  return (
    <div>
      <h1>Page Ex Details</h1>
    </div>
  );
}

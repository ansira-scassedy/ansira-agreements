import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Apps() {
  const { query } = useRouter();

  if (Object.keys(query).length != 0) {
    useEffect(() => {
      saveAuthData(query.state, query.code);
    }, []);
  }

  return (
    <>
    </>
  );

  async function saveAuthData(appId, authCode) {
    console.log(appId);
    console.log(authCode);
    const authDetails = { code: authCode, appiId: appId };
    const response = await fetch("/api/authVerify", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(authDetails),
    });
  }
}

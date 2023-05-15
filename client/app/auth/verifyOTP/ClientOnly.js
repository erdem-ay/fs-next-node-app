import React, { useState, useEffect } from "react";

const ClientOnly = ({ children }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient ? children : null;
};

export default ClientOnly;

function calculate() {
    const networkId = document.getElementById('networkId').value;
  
    const { ipRange, numHosts } = calculateNetworkDetails(networkId);
  
    document.getElementById('ipRange').innerText = ipRange;
    document.getElementById('numHosts').innerText = numHosts;
  }
  
  function calculateNetworkDetails(networkId) {
    // Implementation of the calculation logic
    // ...
  
    // Example logic (you may replace it with your actual implementation)
    const ipPare = networkId + ".1";
    const ipEnd = networkId + ".254";
    const numHosts = 254; // Assuming a /24 subnet
  
    return { ipRange: `${ipPare} - ${ipEnd}`, numHosts };
  }
  
function generate() {
    const networkId = document.getElementById('networkId').value;
    const numSubnets = parseInt(document.getElementById('numSubnets').value, 10);
  
    const subnetDetailsList = generateSubnetDetails(networkId, numSubnets);
  
    displayResults(subnetDetailsList);
  }
  
  function generateSubnetDetails(networkId, numSubnets) {
    // Implementation of the generation logic
    // ...
  
    // Example logic (you may replace it with your actual implementation)
    const subnetDetailsList = [];
    for (let i = 0; i < numSubnets; i++) {
      const subnetId = `${networkId}.${i * 16}`;
      const broadcastId = `${networkId}.${(i + 1) * 16 - 1}`;
      const ipPare = `${networkId}.${i * 16 + 1}`;
      const ipEnd = `${networkId}.${(i + 1) * 16 - 2}`;
      const numHosts = 14; // Assuming a /28 subnet
  
      subnetDetailsList.push({
        subnetId,
        broadcastId,
        ipRange: `${ipPare} - ${ipEnd}`,
        numHosts,
      });
    }
  
    return subnetDetailsList;
  }
  
  function displayResults(subnetDetailsList) {
    const resultContainer = document.getElementById('result-container');
    const subnetList = document.getElementById('subnetList');
  
    // Clear previous results
    subnetList.innerHTML = '';
  
    subnetDetailsList.forEach(subnet => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span><strong>Subnet ID:</strong> ${subnet.subnetId}</span><br>
        <span><strong>Broadcast ID:</strong> ${subnet.broadcastId}</span><br>
        <span><strong>IP Range:</strong> ${subnet.ipRange}</span><br>
        <span><strong>Number of Hosts:</strong> ${subnet.numHosts}</span>
      `;
      subnetList.appendChild(listItem);
    });
  
    resultContainer.style.display = 'block';
  }
  
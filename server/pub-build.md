## What the Backend Does

### **Public Endpoints**

#### **Return Event Data for Display**
- Return event information for public display.

#### **Filler Registration**
1. **Search for the Event or Run**.
2. **If found**:
    - Add the filler to the list of active participants.
    - Add the filler’s information to the team.
    - Link the filler to the event in the system.
3. **If not found**:
    - Return an error.

#### **Manager Login**
1. **Authenticate manager credentials**.
    - If **error**, return an error.
    - If **successful login**:
      - Fetch and apply **manager’s settings**.
      - Get manager’s **active and archived runs**.
      - Show a selection modal (or skip it if only one active run exists).

#### **Manager Registration**
1. **Check if username is available**.
    - If **taken**, return an error.
    - If **available**:
      - Create the **manager account**.
      - Create and store the manager’s **default settings**.
      - **Auto-log them in** and continue to the manager’s dashboard.

---

### **Manager Protected Endpoints**

> **Note:** All routes will verify the manager’s identity and permissions before continuing.

#### **Create a Run**
1. Provide the form data.
2. Add **runner details**.
3. Add **team information** for the runner.
4. Create a **new run** using the provided form data.
5. Link the manager to the run.
6. Create and link **notes** for the run (optional).
7. Designate the manager as the **lead** for this run.

#### **Join a Run**
1. Verify the manager is **not already part of the run**.
2. Link the manager to the run.

#### **Archive a Run**
1. Verify that the manager has the **necessary permissions**.
2. Mark the run as **archived**.
3. Refresh the event list to reflect the updated status.

#### **Update Manager Settings**
- Update the **manager’s settings** as specified in the request.

#### **Update Schedule**
- Add or update the **schedule details** for a specific event or run.

#### **Update Filler Data**
- Update filler-related data for the team assigned to a specific event or run.

#### **Update Teams Per Hour**
- Add or update the **team’s hourly assignments** for a specific run.

#### **Remove Fillers from a Run**
1. Identify the **filler’s assignments** in the team.
2. **Remove the filler’s team records** for that hour.
    - No undo available. If a team was formed, it will be removed.
3. Nullify the **filler slot** to maintain the team’s structure (other fillers remain intact).
4. **Unlink the filler** from the event or run.

#### **Verify Manager-Linked Events**
- Return a list of events associated with the manager’s account.

#### **Return Fillers for a Specific Run**
- Return a list of all fillers linked to a specific run.

#### **Return Runners for a Specific Run**
1. **Find the runner** linked to the event.
2. **Return runner details** based on the associated event or run.

#### **Return Teams Per Hour for a Specific Run**
- Return all **hourly team data** for a specific run.

#### **Return Notes Per Hour for a Specific Run**
- Return **hourly notes** linked to a specific run.

---

### **Lead-Only Endpoints**

#### **Remove Managers from a Run**
- This operation may happen behind the scenes.  
- When a user logs in, the app verifies their access and updates the manager’s context.  
- This logic runs in the background to ensure proper access control is in place.

#### **On Login, the Following Happen Automatically:**
1. **Retrieve Schedule Data**
2. **Retrieve Notes**
3. **Retrieve Team Assignments**
4. **Retrieve Filler Details**
5. **Retrieve Manager Information**


# Access Control (ACL)

## [5 steps to RBAC](https://www.csoonline.com/article/3060780/security/5-steps-to-simple-role-based-access-control.html)

Vocab:

**Access control lists (ACL)** — An ACL is a means of defining access rights by a given user or user group, to a specific object, such as a document.  As a simple example, an ACL could be used to allow users from one department to make changes to a document, while only allowing users from other departments to read the document.

**Attribute-based access control (ABAC)** — ABAC, sometimes known as policy-based access control, can use a variety of attributes, including user department, time of day, location of access, type of access required, etc. to determine whether a user’s access request should be granted.

**Authentication**
Authentication is the first step of the process. Its aim is simple – to make sure the identity is who they say they are. We run into it daily both in digital (username/password) and analog forms (ID/passport).

**Access Control**
Access control is the addition of extra authentication steps to further protect important segments. Once the identity proves they are who they say they are, access is granted. With access comes the authority to perform actions on whatever it is the identity has access to.

**Authorization**
Authorization defines the set of actions that the identity can perform after gaining access to a specific part of the infrastructure, protecting from threats that access controls alone are ineffective against.

### 1. What is Role Based Access Control (RBAC) and why do we care?

RBAC is the idea of assigning system access to users based on their role in an organization. The system needs of a given workforce are analyzed, with users grouped into roles based on common job responsibilities and system access needs. Access is then assigned to each person based strictly on their role assignment.

81 percent of hacking-related breaches involve compromised credentials. When user’s credentials are compromised, it can result in the compromise of the company’s entire infrastructure.

With the proper implementation of RBAC, the assignment of access rights becomes systematic and repeatable. Further, it is much easier to audit user rights, and to correct any issues identified.

### 2. Describe a Role/Permission heirarchy that you might implement using RBAC.

For example, you might have a basic user role, which includes the access any employee would need, such as email and the intranet site. Another role might be a customer service rep, that would have read/write access to the customer database, and a customer database administrator, that would have full control of the customer database. 

### 3. What approach might you take to implement RBAC?

  1. Inventory your systems : Figure out what resources you have for which you need to control access, if you don't already have them listed.
  2. Analyze your workforce and create roles : You need to group your workforce members into roles with common access needs.  Avoid the temptation to have too many roles defined. Keep them as simple and stratified as possible.
  3. Assign people to roles : figure out which role(s) each employee belongs in
  4. Never make one-off changes : Resist any temptation to make a one-off change for an employee with unusual needs. Change the roles as required or add new ones when really necessary.
  5. Audit : Periodically review your roles, the employees assigned to them, and the access permitted for each.

## [wiki - RBAC](https://en.wikipedia.org/wiki/Role-based_access_control)

### 1. If Authentication is “you are who you say you are,” what is Authorization?

Authorization determines the user's access rights based upon their authentication.

### 2. Name three primary rules defined for RBAC.

1. Role assignment: A subject can exercise a permission only if the subject has selected or been assigned a role.
2. Role authorization: A subject's active role must be authorized for the subject. With rule 1 above, this rule ensures that users can take on only roles for which they are authorized.
3. Permission authorization: A subject can exercise a permission only if the permission is authorized for the subject's active role. With rules 1 and 2, this rule ensures that users can exercise only permissions for which they are authorized.

### 3. Describe RBAC to a non-technical friend.

Within an organization, roles are created for various job functions. The permissions to perform certain operations are assigned to specific roles. Members or staff (or other system users) are assigned particular roles, and through those role assignments acquire the permissions needed to perform particular system functions. Since users are not assigned permissions directly, but only acquire them through their role (or roles), management of individual user rights becomes a matter of simply assigning appropriate roles to the user's account; this simplifies common operations, such as adding a user, or changing a user's department.

## [RBAC tutorial](https://www.youtube.com/watch?v=C4NP8Eon3cA)

### 1. What Are access rights Associated with? The User? or The Role? Explain.

Access Rights are the permissions an individual user or a computer application holds to read, write, modify, delete or otherwise access a computer file; change configurations or settings, or add or remove applications.

Role-based access control (RBAC) is a method of restricting network access based on the roles of individual users within an enterprise.

Thus access rights are associated with the role, because we define which roles have access rights, and then assign those roles to users.

### 2. Access Rights, or Authorization, is activated after a user successfully does what?

Authentication.

### 3. Explain how RBAC might benefit a business.

- Security: RBAC improves overall security as it relates to compliance, confidentiality, privacy, and access management to resources and other sensitive data and systems.
- Selective access: RBAC systems can support users having multiple roles at the same with specific permissions for each role.
- Security as a function of organizational structure: allows organizations to impose hierarchies for assigning permissions based on the seniority or topology of organizations.
- Separation of duties (SoD): is the concept that no one person has sole control over a task. SoD benefits organizations as cyber-attacks on a single account won't cause significant harm to systems.
- Flexibility: IT organizations can review and adjust permissions associated with each role periodically.

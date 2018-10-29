"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HTTPError extends Error {
    constructor(req, ...params) {
        super(...params);
        this.res = req ? req : null;
        this.status = req ? req.status : null;
        Error.captureStackTrace(this, HTTPError);
    }
}
exports.default = HTTPError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Vycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQXFCLFNBQVUsU0FBUSxLQUFLO0lBSXhDLFlBQVksR0FBUyxFQUFFLEdBQUcsTUFBVztRQUNqQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUV0QyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDSjtBQVpELDRCQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ25vZGUtZmV0Y2gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIVFRQRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgcHVibGljIHJlczogUmVxdWVzdCB8IG51bGw7XG4gICAgcHVibGljIHN0YXR1czogbnVtYmVyIHwgbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHJlcT86IGFueSwgLi4ucGFyYW1zOiBhbnkpIHtcbiAgICAgICAgc3VwZXIoLi4ucGFyYW1zKTtcblxuICAgICAgICB0aGlzLnJlcyA9IHJlcSA/IHJlcSA6IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gcmVxID8gcmVxLnN0YXR1cyA6IG51bGw7XG5cbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgSFRUUEVycm9yKTtcbiAgICB9XG59XG4iXX0=
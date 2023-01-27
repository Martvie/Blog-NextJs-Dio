import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://agljockwepgfwvptnrwo.supabase.co/rest/v1',
    headers: {
        apikey: " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbGpvY2t3ZXBnZnd2cHRucndvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3ODU0NTQsImV4cCI6MTk5MDM2MTQ1NH0.ZmBAAbZltebAbtik5zkP-JZhSwRzMPFxGHVV0niRzXk",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnbGpvY2t3ZXBnZnd2cHRucndvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3ODU0NTQsImV4cCI6MTk5MDM2MTQ1NH0.ZmBAAbZltebAbtik5zkP-JZhSwRzMPFxGHVV0niRzXk"
    }
})
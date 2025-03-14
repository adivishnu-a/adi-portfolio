import { useScrollAnimation } from '@/utils/animations';
import { cn } from '@/lib/utils';

// Define skills with appropriate icons
const allSkills = [
  { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'AWS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Data Structures', iconUrl: 'https://img.icons8.com/color/48/null/flow-chart.png' }, 
  { name: 'Algorithms', iconUrl: 'https://img.icons8.com/color/48/000000/workflow.png' }, 
  { name: 'OOP', iconUrl: 'https://img.icons8.com/color/48/000000/object.png' }, 
  { name: 'DBMS', iconUrl: 'https://img.icons8.com/color/48/null/database-restore.png' }, 
  { name: 'Machine Learning', iconUrl: 'https://img.icons8.com/color/48/000000/artificial-intelligence.png' }, 
];

// Certification data with credential details
const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    credentialId: '35915daf645c4d59ba17b16c365cfaf5',
    issueDate: 'August 2024',
    link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/35915daf645c4d59ba17b16c365cfaf5',
    badgeUrl: 'https://ik.imagekit.io/cowboypanda/awscert.png?updatedAt=1741975994204&tr=w-120,h-120'
  },
  {
    name: '[PCAP-31-03] PCAP – Certified Associate in Python Programming',
    issuer: 'OpenEDG Python Institute',
    credentialId: '8pCU.rLFC.JX4h',
    issueDate: 'July 2023',
    link: 'https://verify.openedg.org/?id=8pCU.rLFC.JX4h',
    badgeUrl: 'https://ik.imagekit.io/cowboypanda/pcap.png?updatedAt=1741975994577&tr=w-120,h-120'
  },
  {
    name: '[PCEP-30-02] PCEP – Certified Entry-Level Python Programmer',
    issuer: 'OpenEDG Python Institute',
    credentialId: 'eX2N.0UOP.CyXV',
    issueDate: 'March 2023',
    link: 'https://verify.openedg.org/?id=eX2N.0UOP.CyXV',
    badgeUrl: 'https://ik.imagekit.io/cowboypanda/pcep.png?updatedAt=1741975994508&tr=w-120,h-120'
  },
  {
    name: 'Elements of AI: Introduction to AI',
    issuer: 'MinnaLearn,\nUniversity of Helsinki',
    credentialId: 'EAI-12345-6789',
    issueDate: 'December 2022',
    link: 'https://verify.openedg.org/?id=eX2N.0UOP.CyXV',
    badgeUrl: 'https://ik.imagekit.io/cowboypanda/uoh.png?updatedAt=1741975994526&tr=w-120,h-120'
  },
];

const Skills = () => {
  const animation = useScrollAnimation(0.1, 'up');

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto" {...animation}>
          <h2 className="section-title">
            My <span className="text-primary">Skills</span>
          </h2>

          <div className="space-y-12">
            <div className="animate-on-scroll from-bottom">
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {allSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <div className="flex-shrink-0 w-6 h-6">
                      <img 
                        src={skill.iconUrl} 
                        alt={`${skill.name} icon`} 
                        className="w-full h-full object-contain"
                        loading="lazy"
                        width={24}
                        height={24}
                      />
                    </div>
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center animate-on-scroll from-bottom">
            <h3 className="text-xxl font-bold mb-6">Certifications</h3>
            <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-lg relative flex gap-4"
                >
                  <div className="flex-grow pr-24">
                    <div className="font-medium text-primary">{cert.name}</div>
                    <div className="text-sm text-muted-foreground mb-2" style={{ whiteSpace: 'pre-line' }}>{cert.issuer}</div>
                    
                    <div className="mt-3 pt-3 border-t border-border/50">
                      <div className="text-sm mb-1">
                        <span className="font-medium">Credential ID:</span> {cert.credentialId}
                      </div>
                      <div className="text-sm mb-3">
                        <span className="font-medium">Issued:</span> {cert.issueDate}
                      </div>
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-full inline-flex items-center gap-1 transition-colors"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2">
                    <img 
                      src={cert.badgeUrl} 
                      alt={`${cert.name} Badge`}
                      className="h-[5.8rem] w-auto object-contain"
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;